import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";
import { InputItem } from "../../components/input.component";
import { useRef, useState } from "react";

export const AddToDo = ({ add }: any) => {
  const [open, setOpen] = useState(false);
  const [formValid, setValid] = useState(false);
  const formRef = useRef<any>(null);
  const save = () => {
    add(formRef.current[0].value);
    setValid(false);
    formRef.current.reset();
    console.log(formRef.current[0].value);
    setOpen(false)
  }

  const formValidity = () => {
    if (formRef?.current) {
      var arr = Array.from(formRef?.current?.elements);
      console.log(arr.every((x: any) => x.validity.valid));
      var arr = Array.from(formRef?.current?.elements);
      if (arr.every((x: any) => x.validity.valid)) {
        setValid(true);
      } 
      // else {
      //   setValid(false);
      // }
    } 
    // else {
    //   setValid(false);
    // }
  }

  return (
    <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary">Add</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Add new</DialogTitle>
          <DialogContent>
            <form ref={formRef} onBlur={() => { formValidity() }} onChange={() => { formValidity() }} >
              <InputItem required={true} />
              <Button appearance="primary" type="submit" disabled={!formValid} onClick={() => save()}>Save</Button>
            </form>
          </DialogContent>
          {/* <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary" onClick={() => setValid(false)}>Close</Button>
            </DialogTrigger>
          </DialogActions> */}
        </DialogBody>
      </DialogSurface>
    </Dialog >
  );
};