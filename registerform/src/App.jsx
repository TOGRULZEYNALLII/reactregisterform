import "./App.css";
import classNames from "classnames";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Input,
  FormText,
} from "reactstrap";
function App() {
  const VALIDATION_MESSAGES = {
    required: "Doldurmaniz teleb olunur",
    minLength: "En az 3 xana doldurmalisiniz",
    minLength2: "parol 7 setrden boyuk olamlidir",
  };
  const {
    handleSubmit,
    control,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "nese",
      surname: "Zeynalli",
      password: 1234,
    },
  });
  const onsubmit = (values) => {
    console.log(values);
  };
  const nameInput = ({ field: { value, onChange } }) => {
    return (
      <>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            onChange={onChange}
            value={value}
            name="name"
            className={classNames({
              "is-invalid": errors?.name,
            })}
          ></Input>
          {errors?.name && (
            <FormText color="danger">{errors?.name?.message}</FormText>
          )}
        </div>
      </>
    );
  };
  const passwordInput = ({ field: { value, onChange } }) => {
    return (
      <>
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          value={value}
          onChange={onChange}
          className={classNames({
            "is-invalid": errors?.password,
          })}
        ></Input>
        <FormText color="danger">{errors?.password?.message}</FormText>
      </>
    );
  };
  const surnameInput = ({ field: { value, onChange } }) => {
    return (
      <>
        <div>
          <Label htmlFor="surname">surname</Label>
          <Input
            onChange={onChange}
            value={value}
            name="surname"
            className={classNames({
              "is-invalid": errors?.surname,
            })}
          ></Input>

          {errors?.surname && (
            <FormText color="danger">{errors?.surname?.message}</FormText>
          )}
        </div>
      </>
    );
  };
  const name = watch("name");
  useEffect(() => {
    if (name == "togrul") {
      setValue("name", "elnur");
    }
  }, [name]);
  console.log(name);
  return (
    <>
      <div className="container mt-5">
        <Card>
          <CardHeader>
            <CardTitle>Form</CardTitle>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit(onsubmit)}>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: VALIDATION_MESSAGES.required,
                  },
                  minLength: {
                    value: 3,
                    message: VALIDATION_MESSAGES.minLength,
                  },
                }}
                render={nameInput}
                name="name"
                control={control}
              />

              <Controller
                rules={{
                  required: {
                    value: true,
                    message: VALIDATION_MESSAGES.required,
                  },
                  minLength: {
                    value: 3,
                    message: VALIDATION_MESSAGES.minLength,
                  },
                }}
                render={surnameInput}
                name="surname"
                control={control}
              />
              <Controller
                name="password"
                render={passwordInput}
                rules={{
                  required: {
                    value: true,
                    message: VALIDATION_MESSAGES.required,
                  },
                  minLength: {
                    value: 7,
                    message: VALIDATION_MESSAGES.minLength2,
                  },
                }}
                control={control}
              />

              <textarea
                name="textarea"
                id="textarea"
                cols="10"
                rows="3"
                onChange={onchange}
              ></textarea>
              <div className="TRASHDIV"></div>
              <Button className="mt-2" color="success">
                submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default App;
