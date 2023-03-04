import React, { useEffect, useState } from 'react';

export default function MovieDetail() {

    useEffect(() => {
        const fetchMovie = async () => {
            const headers = {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InRoaXMgYXBpIGNhbGxlZHMifQ.uqz671Y8cTqF1ivIpGVfN5p83HmRMaspBNdffOw-ZXI`,
                    "Content-Type": "application/json;charset=utf-8",
                }
            }
            const response = await fetch('/movie-list/movies/',headers)
            console.log(response)
            const json = await response.json()
            console.log('json',json)

            if (response.ok) {
                // setWorkouts(json)  -
            }
        }

        fetchMovie()
    }, [])

    return (
        <div className="relative flex flex-col justify-start min-h-screen overflow-hidden">
            <div className="flex justify-around">
                <h1 className="text-xl font-semibold text-zinc-500">Home {'>'} Detail</h1>
                <h1 className="text-2xl font-semibold text-zinc-500">DeadPool</h1>
            </div>
            <div className="flex justify-between">
                <img
                    className='w-72'
                    src='https://firebasestorage.googleapis.com/v0/b/bookstore-81666.appspot.com/o/Deadpool2.jpg?alt=media&token=a9448b18-fea6-4942-8c7b-63718817ffa8' />
                <div className="flex flex-col justify-around">
                    <h1 className="text-2xl font-semibold text-zinc-500">2016</h1>
                    <h3 className="text-2xl font-semibold text-zinc-500">Genres</h3>

                    <h2 className="text-2xl font-semibold text-zinc-500">Reviews</h2>
                    <h1 className="text-2xl font-semibold text-zinc-500">7.6/10</h1>

                    <h2 className="text-2xl font-semibold text-zinc-500">Synopsis</h2>
                    <p>This is the origin story of former speial forces operative turned mercenary wade wilson, who .....</p>
                </div>
            </div>


        </div>
    )
}