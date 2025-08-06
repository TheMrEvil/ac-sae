// Your "Input" tab should look like this
const modifier = (text) => {
    // Your other input modifier scripts go here (preferred)
    text = AutoCards("input", onInput_SAE(text));
    // Your other input modifier scripts go here (alternative)
    return { text };
};
modifier(text);