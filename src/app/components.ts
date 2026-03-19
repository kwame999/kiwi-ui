export const components: ComponentTypes[] = [
  {
    componentType: 'Environmental Switch',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Buttons',
    definitions: {
      props: [],
      type: [],
      default: [],
    },
  },
  {
    componentType: 'Tag Setter',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Inputs',
    definitions: {
      props: [],
      type: [],
      default: [],
    },
  },
  {
    componentType: 'Save Button',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Buttons',
    definitions: {
      props: [],
      type: [],
      default: [],
    },
  },
  {
    componentType: 'Tool Bar',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Tools',
    definitions: {
      props: [],
      type: [],
      default: [],
    },
  },
  {
    componentType: 'Morphing Card',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Cards',
    definitions: {
      props: [],
      type: [],
      default: [],
    },
  },
  {
    componentType: 'Filter Table',
    description: 'An environmental switch with hover animation and micro-interactions',
    category: 'Tools',
    definitions: {
      props: [],
      type: [],
      default: [],
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
    default: string[],
  }
  
}


export const componentCategories = ["All", 'Cards', 'Tools', 'Buttons', 'Inputs', 'Navigation']