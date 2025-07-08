import { useState } from "react";
import FilterList from "./FilterList";

export default function Filter({ fetchData }) {

    return (
        <>
            <div className="flex justify-center items-center gap-2">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                </svg>
                <FilterList fetchData={fetchData}/>
            </div>
        </>
    );
}
