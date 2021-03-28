import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import {
  addContainerClassname,
  changeSelectedMenuHasSubItems,
  setContainerClassnames,
} from "../../actions/MenuActions";
import { MenuContext } from "../../context/MenuContext";
import Footer from "../navs/Footer";
import Sidebar from "../navs/Sidebar";
import TopNav from "../navs/Topnav";

const AppLayout = ({
  containerClassnames,
  children,
  history,
  handleLogout,
  user,
  ...props
}) => {
  const { dispatch, menu } = useContext(MenuContext);

  const handleSetContainerClassnames = (
    clickIndex,
    strCurrentClasses,
    selectedMenuHasSubItems
  ) => {
    dispatch(
      setContainerClassnames(
        clickIndex,
        strCurrentClasses,
        selectedMenuHasSubItems
      )
    );
  };

  const handleChangeSelectedMenuHasSubItems = (hasSubMenu) => {
    dispatch(changeSelectedMenuHasSubItems(hasSubMenu));
  };

  const handleAddContainerClassname = (oldClassName, newClassName) => {
    dispatch(addContainerClassname(oldClassName, newClassName));
  };

  return (
    <div id="app-container" className={menu.containerClassnames}>
      <TopNav
        history={history}
        containerClassnames={menu.containerClassnames}
        menuClickCount={menu.menuClickCount}
        selectedMenuHasSubItems={menu.selectedMenuHasSubItems}
        subHiddenBreakpoint={menu.subHiddenBreakpoint}
        menuHiddenBreakpoint={menu.menuHiddenBreakpoint}
        userName={`${"Hi. John Doe"}`}
        user={user}
        logoutUserAction={handleLogout}
      />
      <Sidebar
        menuClickCount={menu.menuClickCount}
        containerClassnames={menu.containerClassnames}
        selectedMenuHasSubItems={menu.selectedMenuHasSubItems}
        subHiddenBreakpoint={menu.subHiddenBreakpoint}
        menuHiddenBreakpoint={menu.menuHiddenBreakpoint}
        setContainerClassnames={handleSetContainerClassnames}
        changeSelectedMenuHasSubItems={handleChangeSelectedMenuHasSubItems}
        addContainerClassname={handleAddContainerClassname}
        role={user}
      />
      <main>
        <div className="container-fluid">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default withRouter(AppLayout);
