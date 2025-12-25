#!/usr/bin/env node

const args = process.argv.slice(2);

const username = args[0];

async function getGithubActivity() {

    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
}

const result = await getGithubActivity();
