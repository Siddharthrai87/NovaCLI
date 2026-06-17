import { createOpenRouter } from "@openrouter/ai-sdk-provider";

function normalizeModelId(value: string | undefined) {
    if (!value) return undefined;
    return value.trim().replace(/^['"]+|['"]+$/g, "");
}

export function getAgentModel() {
    const provider = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });
    const modelID = normalizeModelId(process.env.OPENROUTER_DEFAULT_MODEL);

    if (!modelID) {
        throw new Error("OPENROUTER_DEFAULT_MODEL is not set.");
    }

    return provider(modelID);
}