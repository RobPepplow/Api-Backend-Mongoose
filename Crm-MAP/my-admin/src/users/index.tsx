import { Create, Datagrid, List, ResourceComponentInjectedProps, SimpleForm, TextField, TextInput, Edit} from "react-admin";
import './styles.css'


export const UserList = (props: ResourceComponentInjectedProps ) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="phone" />
        </Datagrid>
    </List>
)

export const UserCreate = (props: ResourceComponentInjectedProps ) => (
    <Create {...props} className="Createu">
        <SimpleForm className="formCreate">
            <TextInput source="name" className="Create"/>
            <TextInput source="username" className="Create"/>
            <TextInput source="email" className="Create"/>
            <TextInput source="phone" className="Create"/>
        </SimpleForm>
    </Create>
)

export const UserEdit = (props: ResourceComponentInjectedProps ) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
)