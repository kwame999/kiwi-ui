import type { ComponentTypes } from "../types";
export const components: ComponentTypes[] = [
  {
    componentType: 'Environmental Switch',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Buttons',
    meta: [
        {prop: 'isOpen', type: 'Boolean', defaults: ''}, 
        {prop: 'content', type: 'string', defaults: ''}
      ]
  },
  {
    componentType: 'Tag Setter',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Inputs',
     meta: [
        {prop: 'isOpen', type: 'Boolean', defaults: 'sgbhg'}, 
        {prop: 'zips', type: 'Array[]', defaults: ''},
        {prop: 'content', type: 'string', defaults: ''}
      ]
  },
  {
    componentType: 'Save Button',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Buttons',
    meta: [
            {prop: 'content', type: 'string', defaults: ''}
          ]
  },
  {
    componentType: 'Tool Bar',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Tools',
    meta: [
        {prop: '', type: '', defaults: ''},
        {prop: '', type: '', defaults: ''}
      ]
  },
  {
    componentType: 'Morphing Card',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Cards',
    meta: [
        {prop: '', type: '', defaults: ''},
        {prop: '', type: '', defaults: ''}
      ]
  },
  {
    componentType: 'Filter Table',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Tools',
    meta: [
        {prop: '', type: '', defaults: ''},
        {prop: '', type: '', defaults: ''}
      ]
  },
];


export const componentCategories = ["All", 'Cards', 'Tools', 'Buttons', 'Inputs', 'Navigation']