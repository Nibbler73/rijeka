import * as Types from '../../__generated/graphql.types';

export type ComponentReferenceFields_Category_Fragment = { __typename: 'Category', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentCta_Fragment = { __typename: 'ComponentCta', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentFeaturedCards_Fragment = { __typename: 'ComponentFeaturedCards', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Post_Fragment = { __typename: 'Post', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_TopicPerson_Fragment = { __typename: 'TopicPerson', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_TopicProduct_Fragment = { __typename: 'TopicProduct', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFields_TopicProductFeature_Fragment = { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_Category_Fragment | ComponentReferenceFields_ComponentCta_Fragment | ComponentReferenceFields_ComponentDuplex_Fragment | ComponentReferenceFields_ComponentFeaturedCards_Fragment | ComponentReferenceFields_ComponentHeroBanner_Fragment | ComponentReferenceFields_ComponentInfoBlock_Fragment | ComponentReferenceFields_ComponentProductTable_Fragment | ComponentReferenceFields_ComponentQuote_Fragment | ComponentReferenceFields_ComponentTextBlock_Fragment | ComponentReferenceFields_Page_Fragment | ComponentReferenceFields_Post_Fragment | ComponentReferenceFields_Seo_Fragment | ComponentReferenceFields_TopicBusinessInfo_Fragment | ComponentReferenceFields_TopicPerson_Fragment | ComponentReferenceFields_TopicProduct_Fragment | ComponentReferenceFields_TopicProductFeature_Fragment;

export const ComponentReferenceFieldsFragmentDoc = `
    fragment ComponentReferenceFields on Entry {
  __typename
  sys {
    id
  }
  ... on ComponentCta {
    internalName
  }
  ... on ComponentDuplex {
    internalName
  }
  ... on ComponentFeaturedCards {
    internalName
  }
  ... on ComponentHeroBanner {
    internalName
  }
  ... on ComponentInfoBlock {
    internalName
  }
  ... on ComponentProductTable {
    internalName
  }
  ... on ComponentQuote {
    internalName
  }
  ... on ComponentTextBlock {
    internalName
  }
  ... on TopicBusinessInfo {
    internalName
  }
  ... on TopicPerson {
    internalName
  }
  ... on TopicProduct {
    internalName
  }
}
    `;