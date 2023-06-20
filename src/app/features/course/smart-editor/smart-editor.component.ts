import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditorComponent } from '@smart-webcomponents-angular/editor';

@Component({
  selector: 'app-smart-editor',
  templateUrl: './smart-editor.component.html',
  styleUrls: ['./smart-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SmartEditorComponent implements AfterViewInit {
  @ViewChild('editor', { read: EditorComponent, static: false }) editor: EditorComponent;

    toolbarItems: string[] = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'hyperlink', 'table', 'Image', '|', 'ClearFormat', 'Print',
        'SourceCode', 'splitmode', 'FullScreen', '|', 'Undo', 'Redo', 'subscript', 'superscript', 'delete'];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        this.editor.expandToolbar();
    };
}
