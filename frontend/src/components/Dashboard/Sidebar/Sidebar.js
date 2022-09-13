import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import { Tab, ListGroup } from "react-bootstrap";

const Sidebar = () => {
  //   const [activeGenre, { handleActiveGenreChange }] = useActiveGenreContext();
  //   const [genresData, _handleGenresDataChange] = useGenresDataContext();
  //   const handleShowAllMovies = () => {
  //     handleActiveGenreChange({
  //       name: "All Movies",
  //       id: "0",
  //     });

  //     return;
  //   };

  //   const handleSelectGenre = (genre) => {
  //     handleActiveGenreChange({
  //       name: genre.name,
  //       id: genre._id,
  //     });

  //     return;
  //   };

  return (
    <Tab.Container id="sidebarListGroup" defaultActiveKey="Overview">
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          action
          href="Overview"
          //   onClick={handleShowAllMovies}
          style={{ cursor: "pointer" }}
        >
          Overview
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          action
          href="Users"
          //   onClick={handleShowAllMovies}
          style={{ cursor: "pointer" }}
        >
          Users
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          action
          href="Products"
          //   onClick={handleShowAllMovies}
          style={{ cursor: "pointer" }}
        >
          Products
        </ListGroup.Item>
      </ListGroup>
    </Tab.Container>
  );
};

export default Sidebar;
