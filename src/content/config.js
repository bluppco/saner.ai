import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		link: z.string().optional(),
		order: z.number(),
		active: z.boolean(),
		has_dropdown: z.boolean(),
		items: z.array(

			z.object({

				title: z.string(),
				link: z.string(),
				order: z.number(),
				
			})

		).optional(),

	})

})

const footerColumnOneCollection = defineCollection({
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
	})
})
const footerColumnTwoCollection = defineCollection({
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
	})
})
const footerColumnThreeCollection = defineCollection({
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
	})
})
const footerColumnFourCollection = defineCollection({
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
	})
})
const footerColumnFiveCollection = defineCollection({
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
	})
})
export const collections = {

	"header": headerCollection,
	"footer-column-one": footerColumnOneCollection,
    "footer-column-two": footerColumnTwoCollection,
    "footer-column-three": footerColumnThreeCollection,
    "footer-column-four": footerColumnFourCollection,
    "footer-column-five": footerColumnFiveCollection,	

}
