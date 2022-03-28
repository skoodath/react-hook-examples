import { useContext } from "react";
import DataContext from "../context";
import Email from "../styles/email.style";

const { Wrapper, Inner, Card, CardTitle, Contact, SubTitle, Links } = Email;

const EmailComponent = () => {
  const { users } = useContext(DataContext);

  return (
    <Wrapper>
      <Inner>
        {users.map((user) => (
          <Card key={user.id}>
            <CardTitle>{user.name}</CardTitle>
            <Contact>
              <SubTitle>Email</SubTitle>

              <Links href={`email:${user.email}`}>{user.email}</Links>
            </Contact>
            <Contact>
              <SubTitle>Website</SubTitle>
              <Links href={`${user.website}`}>{user.website}</Links>
            </Contact>
          </Card>
        ))}
      </Inner>
    </Wrapper>
  );
};

export default EmailComponent;
