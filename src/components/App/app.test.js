// src/components/App/app.test.js

import { render, screen } from "@testing-library/react";
import App from "./index";

describe("App component", () => {
  it("renders HomeScene component", () => {
    render(<App />);
    const homeElement = screen.getByText(/Welcome to the Rhythm Game/i); // HomeScene에 있는 텍스트가 렌더링되는지 확인
    expect(homeElement).toBeInTheDocument();
  });
});
