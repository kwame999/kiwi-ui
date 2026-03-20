export const components: ComponentTypes[] = [
  {
    componentType: 'Environmental Switch',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Buttons',
    definitions: {
      props: ['data', 'Onclick'],
      type: ['asdasd'],
      defaults: ['adad'],
    },
  },
  {
    componentType: 'Tag Setter',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Inputs',
    definitions: {
      props: [],
      type: [],
      defaults: [],
    },
  },
  {
    componentType: 'Save Button',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Buttons',
    definitions: {
      props: [],
      type: [],
      defaults: [],
    },
  },
  {
    componentType: 'Tool Bar',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Tools',
    definitions: {
      props: [],
      type: [],
      defaults: [],
    },
  },
  {
    componentType: 'Morphing Card',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Cards',
    definitions: {
      props: [],
      type: [],
      defaults: [],
    },
  },
  {
    componentType: 'Filter Table',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Tools',
    definitions: {
      props: [],
      type: [],
      defaults: [],
    },
  },
];


export type ComponentTypes = {
  componentType: string,
  description: string,
  category: string,
  definitions: {
    props: string[],
    type: string[],
    defaults: string[],
  }
  
}


export const componentCategories = ["All", 'Cards', 'Tools', 'Buttons', 'Inputs', 'Navigation']