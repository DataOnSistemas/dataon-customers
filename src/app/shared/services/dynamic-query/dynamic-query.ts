export class DynamicQuery {
    doID: number = 0;
    doIDUser: number = -100;
    context: string = "";
    criterion: string = "";
    sorters?: string = "DATA DESC, FUTURO DESC";
    fuso?: number = 0;
    filter?: string = "";
    page: number = 0;
    start: number = 0;
    limit: number = 20;
}

