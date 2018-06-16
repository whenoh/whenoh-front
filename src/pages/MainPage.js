import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostSlider from 'components/common/PostSlider';

const MainPage = () => (
  <PageTemplate>
    <PostSlider title={'POPULAR CARDS'}/>
    <PostSlider title={'LATEST CARDS'}/>
  </PageTemplate>
);

export default MainPage;
