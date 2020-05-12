import React, { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';

import StylistPageLoading from './StylistPage.loading';
import StylistPageContent from './StylistPage.content';

const StylistPage = ({
  match: {
    params: { id },
  },
  stylistList,
  fetchStylistById,
  fetchStylistContent,
  fetchStylistError,
}) => {
  const [stylist, setStylist] = useState(null);

  useEffect(() => {
    const stylist = stylistList && stylistList.find((s) => s.id === id);
    if (stylist) {
      setStylist(stylist);
      if (!stylist.services || !stylist.comments) fetchStylistContent(id);
    } else {
      fetchStylistById(id);
    }
  }, [stylistList, fetchStylistById, id, fetchStylistContent]);

  return (
    <Container>
      {stylist ? (
        <StylistPageContent stylist={stylist} />
      ) : (
        <StylistPageLoading error={fetchStylistError} />
      )}
    </Container>
  );
};

export default StylistPage;
