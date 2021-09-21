import { Component } from '@angular/core';
import {MessageService} from 'primeng/api';

export interface TreeNode<T = any> {
  label?: string;
  data?: T;
  icon?: string;
  expandedIcon?: any;
  collapsedIcon?: any;
  children?: TreeNode<T>[];
  leaf?: boolean;
  expanded?: boolean;
  type?: string;
  parent?: TreeNode<T>;
  partialSelected?: boolean;
  styleClass?: string;
  draggable?: boolean;
  droppable?: boolean;
  selectable?: boolean;
  key?: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'eERPSolutionAngular';
  data1: TreeNode[] =[];

  data2: TreeNode[]=[];

  selectedNode: TreeNode={};

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.data1 = [{
          label: 'CEO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'Walter White', 'avatar': 'walter.jpg'},
          children: [
              {
                  label: 'CFO',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                  children:[{
                      label: 'Tax',
                      styleClass: 'department-cfo'
                  },
                  {
                      label: 'Legal',
                      styleClass: 'department-cfo'
                  }],
              },
              {
                  label: 'COO',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                  children:[{
                      label: 'Operations',
                      styleClass: 'department-coo'
                  }]
              },
              {
                  label: 'CTO',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                  children:[{
                      label: 'Development',
                      styleClass: 'department-cto',
                      expanded: true,
                      children:[{
                          label: 'Analysis',
                          styleClass: 'department-cto'
                      },
                      {
                          label: 'Front End',
                          styleClass: 'department-cto'
                      },
                      {
                          label: 'Back End',
                          styleClass: 'department-cto'
                      }]
                  },
                  {
                      label: 'QA',
                      styleClass: 'department-cto'
                  },
                  {
                      label: 'R&D',
                      styleClass: 'department-cto'
                  }]
              }
          ]
      }];

      this.data2 = [{
          label: 'F.C Barcelona',
          expanded: true,
          children: [
              {
                  label: 'F.C Barcelona',
                  expanded: true,
                  children: [
                      {
                          label: 'Chelsea FC'
                      },
                      {
                          label: 'F.C. Barcelona'
                      }
                  ]
              },
              {
                  label: 'Real Madrid',
                  expanded: true,
                  children: [
                      {
                          label: 'Bayern Munich'
                      },
                      {
                          label: 'Real Madrid'
                      }
                  ]
              }
          ]
      }];
  }

  onNodeSelect(event:any) {
      this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
  }
}

