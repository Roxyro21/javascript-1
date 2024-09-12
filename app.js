function parser(code) {
  const keywords = [
    "function",
    "return",
    "boolean",
    "case",
    "class",
    "break",
    "const",
    "continue",
    "default",
    "delete",
    "else",
    "for",
    "if",
    "let",
    "null",
    "this",
    "typeof",
    "var",
    "while",
  ];

  const operators = ["+", "-", "/", "*", "%", "=", "==", ">", "<", ">=", "<="];
  const punctuators = ["(", ")", "{", "}", ";", ","];

  const tokens = [];

  code = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "");

  const regex = /\s*(\w+|\d+|[(){};,]|[+\-=]+)/g;
  const matches = code.match(regex);

  for (const match of matches) {
    const trimmed = match.trim();
    if (!trimmed) continue;

    if (keywords.includes(trimmed)) {
      tokens.push({ type: "Keyword", value: trimmed });
    } else if (/^\d+$/.test(trimmed)) {
      tokens.push({ type: "Number", value: trimmed });
    } else if (punctuators.includes(trimmed)) {
      tokens.push({ type: "Punctuator", value: trimmed });
    } else if (operators.includes(trimmed)) {
      tokens.push({ type: "Operator", value: trimmed });
    } else {
      tokens.push({ type: "Identifier", value: trimmed });
    }
  }

  return tokens;
}

const code = `
    function add(a, b) {
        return a + b;
    }
`;

const tokens = parser(code);
console.log(tokens);
