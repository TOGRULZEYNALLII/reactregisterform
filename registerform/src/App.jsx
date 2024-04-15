import "./App.css";
import classNames from "classnames";
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
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "nese",
      surname: "Zeynalli",
    },
  });
  console.log(errors);
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
  const passwordInput = () => {
    return <></>;
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
  return (
    <>
      <div className="container">
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
                    minLength: VALIDATION_MESSAGES.minLength,
                  },
                }}
                render={passwordInput}
                name="surname"
                control={control}
              />
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: VALIDATION_MESSAGES.required,
                  },
                  minLength: {
                    value: 7,
                    minLength: VALIDATION_MESSAGES.minLength2,
                  },
                }}
                render={surnameInput}
                name="surname"
                control={control}
              />
              <Button className="mt-4" color="success">
                submit
              </Button>
              <textarea
                className="mt-3"
                name=""
                id="textera"
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default App;
