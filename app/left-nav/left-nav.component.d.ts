import { Router } from 'angular2/router';
export declare class LeftNavComponent {
    private _router;
    menuItems: Array<string>;
    selectedComponent: string;
    constructor(_router: Router);
    setSelectedComponent(selectedComponent: string): void;
}
