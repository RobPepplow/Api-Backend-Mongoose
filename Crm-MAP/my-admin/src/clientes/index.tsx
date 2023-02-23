import { Create, Datagrid, List, ResourceComponentInjectedProps, SimpleForm, TextField, TextInput, Edit, SelectArrayInput} from "react-admin";
import './styles.css'


export const ClienteList = (props: ResourceComponentInjectedProps ) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="fone" />
            <TextField source="data_nascimento" />
            <TextField source="renda" />
            <TextField source="imovel" />            
            <TextField source="status"/>            
        </Datagrid>
    </List>
)

export const ClienteCreate = (props: ResourceComponentInjectedProps ) => (
    <Create {...props} className="Createu">
        <SimpleForm className="formCreate">
            <TextInput source="id" disabled />
            <TextInput source="nome" />
            <TextInput source="fone" />
            <TextInput source="data_nascimento" />
            <TextInput source="renda" />
            <SelectArrayInput source="imovel" />            
            <SelectArrayInput source="status"/>  
        </SimpleForm>
    </Create>
)

export const ClienteEdit = (props: ResourceComponentInjectedProps ) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="nome" />
            <TextInput source="fone" />
            <TextInput source="data_nascimento" />
            <TextInput source="renda" />
            <SelectArrayInput source="imovel" />            
            <SelectArrayInput source="status"/>  
        </SimpleForm>
    </Edit>
)