// index.js file

import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@components/Layout';
import { Seo } from '@components/Seo';
import HomepageBanner from '@components/HomepageBanner';
import Mainpage from '@components/Mainpage'

const HomeTemplate = ({ data }) => {
    if (!data) return null;
    const doc = data.prismicHomepage.data;

    return (
        <Layout isHomepage backgroundUrl={doc.banner_background.url}>
            <Seo title="Home" />
            <HomepageBanner
                title={doc.banner_title.text}
                description={doc.banner_description.text}
                linkUrl={doc.banner_link.url}
                linkLabel={doc.banner_link_label.text}
                backgroundUrl={doc.banner_background.url}
            />
            {/* <Mainpage /> */}
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        prismicHomepage {
            data {
                banner_title {
                    text
                }
                banner_description {
                    text
                }
                banner_link {
                    url
                    type
                    uid
                }
                banner_link_label {
                    text
                }
                banner_background {
                    url
                }
                body {
                    ... on PrismicSliceType {
                        slice_type
                    }
                }
            }
        }
    }
`;

export default HomeTemplate;
