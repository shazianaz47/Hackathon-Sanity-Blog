import { defineField, defineType } from "sanity"


export default  defineType({
    name:"header",
    type:"document",
    title:"Header",
    fields:[
      defineField( 
        {
        name:"header",
        type:"header",
        title:"Header",
        }),
        defineField(
        {
            name: 'navigationLinks',
            type: 'array',
            title: 'Navigation Links',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    type: 'string',
                    title: 'Title',
                  }]}]}),
        defineField(
                  {
                    name: 'url',
                    type: 'url',
                    title: 'URL',
                  }),
            ],
})
