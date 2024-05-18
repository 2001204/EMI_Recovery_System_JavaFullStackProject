/* Card2 */

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../CSS_Component/Card1.css"

const infoData = [
  {
    cardTitle: "1. Cost-effective",
    cardText: "The overhead of staffing and running costs would be greatly reduced upon retaining an efficient third-party collection agency. To maintain an in-house collection, some businesses spend big money on staffing, telephone calls, invoicing, visits to the debtor’s office etc. Third-party agencies do not require such investment.",
  },
  {
    cardTitle: "2. Freedom to focus on core business operations",
    cardText: "The success and growth of a business depend on the successful recovery of its outstanding debts. The task of debt recovery may keep a business from focusing on their core operation. Therefore, retaining a third party collection agency would give the business the freedom to focus on core business operations.",
  },
  {
    cardTitle: "3. Debtors take third-party debt collection agencies more seriously",
    cardText: "Since the business relationship between the creditor and the debtor remains quite close, it may be difficult for in-house collection to be effective. Experience has shown that the debtor would most likely take a third party debt collection agency more seriously than an in-house collection.",
  },
  {
    cardTitle: "4. Third-party collection agencies use modern and effective recovery techniques",
    cardText: "The harsh economic climate in a majority of jurisdictions has made it trickier to recover debts. In such situation, orthodox methods that fail to yield positive results. The modern and proven recovery strategies of a third party collection agency enable businesses to recover outstanding debts promptly.",
  },
  {
    cardTitle: "5. Third-party collection agency more efficient in international scene",
    cardText: "With the increase in international trade and investment, the risk and cost of going across borders to recover the debt may be more than the debt itself. In such case, in-house debt recovery might not be able to recover the amount. In such a case, retaining the services of a debt recovery agency within the jurisdiction of the debtor will help the business recover the debt.",
  },
  {
    cardTitle: "6. Third-party agency can offer expert help",
    cardText: "Also, the process of recovery of some debts may be technical. Hiring a debt recovery expert skilled in the technical process of debt recovery can promptly solve this problem without having to deal with training your in-house debt collection stuff.",
  },

];

function GridExample() {
  return (
    <Row xs={1} md={3} className="g-4">
      {infoData.map((info, idx) => (
        <Col key={idx}>
          <Card className="custom-card h-100" >
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ fontWeight: "bold" }}>{info.cardTitle}</Card.Title>
              <Card.Text className="flex-grow-1">{info.cardText}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;