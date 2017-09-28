export interface StringComponentModel {
    name: string;
    value: string;
    type: 'key' | 'text' | 'variable' | 'function' | 'barcode';
}
