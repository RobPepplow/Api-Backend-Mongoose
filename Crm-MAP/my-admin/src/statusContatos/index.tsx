import { Create, Datagrid, List, ResourceComponentInjectedProps, SimpleForm, TextField, TextInput, Edit} from "react-admin";
import './styles.css'


export const StatusContatoList = (props: ResourceComponentInjectedProps ) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />           
        </Datagrid>
    </List>
)

export const StatusContatoCreate = (props: ResourceComponentInjectedProps ) => (
    <Create {...props} className="Createu">
        <SimpleForm className="formCreate">
            <TextInput source="name" />
            <TextInput source="description" />            
        </SimpleForm>
    </Create>
)

export const StatusContatoEdit = (props: ResourceComponentInjectedProps ) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)