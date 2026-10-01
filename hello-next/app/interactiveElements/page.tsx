"use client";

import { useState } from "react";

export default function interactiveElements() {
    const [count, setCount] = useState(0);

    return (
        <main>
            <h1>This page has interactive elements</h1>

            <p>You clicked the  button {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </main>
    );
}