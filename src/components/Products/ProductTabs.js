import Ratings from "../Ratings/Ratings";
import Comments from "../comments/Comments";
import ProductDetailedInfo from "./ProductDetailedInfo";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductTabs = (props) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Detailed Information</Tab>
        <Tab>Comments & Ratings</Tab>
      </TabList>

      <TabPanel>
        <ProductDetailedInfo text={props.detailedInfo} />
      </TabPanel>
      <TabPanel>
        <Comments comments={props.comments} />
        <Ratings ratings={props.ratings} />
      </TabPanel>
    </Tabs>
  );
};

export default ProductTabs;
