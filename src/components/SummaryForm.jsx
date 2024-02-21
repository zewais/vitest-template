import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <Popover id="termsAndConditionsPopover">
      <Popover.Body>This website does not sell pizzas!</Popover.Body>
    </Popover>
  );

  return (
    //Form from react-bootstrap
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          id="termsAndConditions"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label={
            <span>
              I agree to the
              <OverlayTrigger
                trigger="hover"
                placement="right"
                overlay={popover}
              >
                <span style={{ color: "blue" }}>terms and conditions</span>
              </OverlayTrigger>
            </span>
          }
        ></Form.Check>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm Order
      </Button>
    </Form>
  );
}
