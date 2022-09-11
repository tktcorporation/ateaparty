export class Logo {
  constructor(private readonly baseUrl: string) {}

  yokogumiUrl = (): string => this.baseUrl + "logo_yokogumi.png";
  symbolUrl = (params: { isPath: boolean; ext: "png" | "svg" }): string =>
    `${params.isPath ? "/" : this.baseUrl}logo_symbol.${params.ext}`;
  pcQuestIconUrl = (params: { isPath: boolean }): string =>
    `${params.isPath ? "/" : this.baseUrl}vrc_quest_pc_icon.svg`;
}
