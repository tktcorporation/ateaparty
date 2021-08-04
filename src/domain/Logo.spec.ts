import { Logo } from "./Logo";

describe("Logo class", () => {
  it("symbol url", () => {
    const logo = new Logo("https://example.com/");
    expect(logo.symbolUrl({ isPath: false, ext: "png" })).toBe(
      "https://example.com/logo_symbol.png"
    );
  });
  it("symbol path", () => {
    const logo = new Logo("https://example.com/");
    expect(logo.symbolUrl({ isPath: true, ext: "png" })).toBe(
      "/logo_symbol.png"
    );
  });
  it("yokogumi url", () => {
    const logo = new Logo("https://example.com/");
    expect(logo.yokogumiUrl()).toBe("https://example.com/logo_yokogumi.png");
  });
});
