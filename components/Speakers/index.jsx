import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Speaker from "../Speaker";
import SpeakerSearchBar from "../SpeakerSearchBar";

import { REQUEST_STATUS, requestReducer } from "../../reducers/request";

import {
    GET_ALL_SUCCESS,
    GET_ALL_FAILURE,
    PUT_FAILURE,
    PUT_SUCCESS,
    UPDATE_STATUS,
} from "../../actions/request";

const Speakers = () => {
    const onFavoriteToggleHandler = async (speaker) => {
        try {
            const toggleFavSpeaker = {
                ...speaker,
                isFavorite: !speaker.isFavorite,
            };

            await axios.put(
                `http://localhost:4000/speakers/${speaker.id}`,
                toggleFavSpeaker
            );

            dispatch({
                type: PUT_SUCCESS,
                record: toggleFavSpeaker,
            });
        } catch (e) {
            dispatch({
                type: PUT_SUCCESS,
                error: e,
            });
        }
    };

    const [{ records: speakers, status, error }, dispatch] = useReducer(
        requestReducer,
        {
            records: [],
            status: REQUEST_STATUS.LOADING,
            error: null,
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/speakers"
                );
                dispatch({ records: response.data, type: GET_ALL_SUCCESS });
            } catch (e) {
                dispatch({
                    type: GET_ALL_FAILURE,
                    error: e,
                });
            }
        };
        fetchData();
    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    const isSuccess = status === REQUEST_STATUS.SUCCESS;
    const isError = status === REQUEST_STATUS.ERROR;
    const isLoading = status === REQUEST_STATUS.LOADING;

    return (
        <div>
            <SpeakerSearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {isLoading && <div>Loading...</div>}
            {isError && <div>There's an error! Message: {error.message} </div>}
            {isSuccess && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                    {speakers
                        .filter((speaker) => {
                            const targetStr = `${speaker.firstName} ${speaker.lastName}`.toLowerCase();
                            return searchQuery.length === 0
                                ? true
                                : targetStr.includes(searchQuery.toLowerCase());
                        })
                        .map((speaker) => (
                            <Speaker
                                {...speaker}
                                key={speaker.id}
                                onFavoriteToggle={() =>
                                    onFavoriteToggleHandler(speaker)
                                }
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Speakers;
