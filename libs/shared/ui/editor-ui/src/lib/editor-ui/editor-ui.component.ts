import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import EditorJS, { OutputData, ToolConstructable } from '@editorjs/editorjs';

import Header from '@editorjs/header';
// @ts-ignore
import NestedList from '@editorjs/nested-list';

@Component({
  selector: 'lib-editor-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor-ui.component.html',
  styleUrl: './editor-ui.component.scss',
})
export class EditorUiComponent implements AfterViewInit {
  @ViewChild('editor', {read: ElementRef, static: true}) editorElement! : ElementRef;
  @Input() data! : OutputData;
  @Input() readonly! : boolean;
  // @Output() saveData = new EventEmitter<string>();
  // @Output() newItemEvent = new EventEmitter<string>();

  private editor! : EditorJS;

  ngAfterViewInit(): void {
    this.initializeEditor();

   
  }

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  initializeEditor() : void{
    this.editor = new EditorJS({
      minHeight: 30,
      holder: this.editorElement.nativeElement,
      placeholder: 'Escribí acá lo que quieras!!',
      readOnly: this.readonly,
      inlineToolbar: ['bold', 'italic'],
      tools: {
        list: {
          class: NestedList as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        header: {
          class: Header as unknown as ToolConstructable,
          shortcut: 'CMD+SHIFT+H',

          config: {
            levels: [2, 3, 4],
            defaultLevel: 3,
            placeholder: 'Titulo'
          }
        }
      },
      data : this.data
    });
  }

   onSave() {
    this.editor
      .save()
      .then((outputData) => {
        // this.saveData.emit(JSON.stringify( outputData))
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
}
