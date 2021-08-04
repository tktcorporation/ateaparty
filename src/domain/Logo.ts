export class Logo {
  constructor(
    private readonly baseUrl: string
  ){}

  yokogumiUrl = () => this.baseUrl + 'logo_yokogumi.png'
  symbolUrl = (params: {
    isPath: boolean,
    ext: 'png' | 'svg',
  }) => `${(params.isPath ? '/' : this.baseUrl)}logo_symbol.${params.ext}`
}
