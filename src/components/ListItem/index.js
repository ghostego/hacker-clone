import React from "react";
import {
  Item,
  Title,
  Host,
  ExternalLink,
  Description,
  CommentLink
} from "./styles";

const LINK_REL = "nofollow noreferrer noopener";

const ListItem = () => {
  return (
    <Item>
      <ExternalLink
        href="https://gitconnected.com"
        rel={LINK_REL}
        target="_blank"
      >
        <Title>Test Title!</Title>
      </ExternalLink>
      <Description>
        9000 poitns by{" "}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          Test User
        </CommentLink>
        ! Hour Ago {" | "}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          42 Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
