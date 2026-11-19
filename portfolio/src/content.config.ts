import { defineCollection } from 'astro:content';
import { conceptSchema } from '@/content/schema/concept.ts';
import { file } from 'astro/loaders';
import { brandSchema } from '@/content/schema/brand.ts';
import { serviceSchema } from '@/content/schema/service.ts';
import { associationSchema } from '@/content/schema/association.ts';
import { forumSchema } from '@/content/schema/forum.ts';
import { partnerSchema } from '@/content/schema/partner.ts';
import { partnerLoader } from '@/content/loaders/partner-loader.ts';

const concepts = defineCollection({
    loader: file('src/content/data/concepts.json'),
    schema: conceptSchema,
});

const brands = defineCollection({
    loader: file('src/content/data/brands.json'),
    schema: brandSchema,
});

const forums = defineCollection({
    loader: file('src/content/data/forums.json'),
    schema: forumSchema,
});

const services = defineCollection({
    loader: file('src/content/data/services.json'),
    schema: serviceSchema,
});

const associations = defineCollection({
    loader: file('src/content/data/associations.json'),
    schema: associationSchema,
});

const partners = defineCollection({
    loader: partnerLoader(),
    schema: partnerSchema,
});

export const collections = {
    concepts,
    brands,
    forums,
    services,
    associations,
    partners,
};
