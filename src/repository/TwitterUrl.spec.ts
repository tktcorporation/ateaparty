import CSV from "comma-separated-values";

describe("TwitterUrl", () => {
  it("fetch csv an parse it", async () => {
    // const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQuPJLzyXZYO7bXaSxfbO0MUlFYCBgKmXi541q5RmS5Mtaan-NhJb6_nIEPLywGpGSebPLwskWYnLS/pub?gid=0&single=true&output=csv";
    // const {data} = await axios.get(url);
    const data = `name,url\r\n第67回 題名のないお茶会,https://twitter.com/ochakai_vrc/status/1488645900973277184?cxt=HHwWgIDUvenj3agpAAAA\r\n君のピアノは,https://twitter.com/ochakai_vrc/status/1480817458441498624?s=20&t=vy6RBWv5u44rnoQpMGKm3g`;
    // const records = await parse(data, {
    //   columns: false,
    //   skip_empty_lines: true,
    // });
    // expect(records).toBe(1);
    // expect(records.read()).toBe(1);
    // // expect(records[0].url).toBe("https://example.com/");
    const result: { name: string; url: string }[] = new CSV(data, {
      header: true,
    }).parse();
    expect(result.length).toBe(2);
    expect(result[0].name).toBe("第67回 題名のないお茶会");
    expect(result[0].url).toBe(
      "https://twitter.com/ochakai_vrc/status/1488645900973277184?cxt=HHwWgIDUvenj3agpAAAA"
    );
    expect(result[1].name).toBe("君のピアノは");
    expect(result[1].url).toBe(
      "https://twitter.com/ochakai_vrc/status/1480817458441498624?s=20&t=vy6RBWv5u44rnoQpMGKm3g"
    );
  });
});
