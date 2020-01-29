export class DataService {
    private data: string[] = ["морковь", "огурцы", "картошка", "молоко", "зубная паста", "пельмени"];
    private dataChecked: string[] = [];
    getData(): string[] {
        return this.data;
    }
    addData(name: string) {
        if(name == null || name.trim() == '') { return; }
        this.data.push(name);
    }
    getDataChecked(): string[] {
        return this.dataChecked;
    }
    addDataChecked(name: string) {
        if(name == null || name.trim() == '') { return; }
        this.dataChecked.push(name);
    }

}