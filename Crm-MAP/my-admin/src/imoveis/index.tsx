import { Create, Datagrid, List, ResourceComponentInjectedProps, SimpleForm, TextField, TextInput, Edit} from "react-admin";
import './styles.css'


export const ImovelList = (props: ResourceComponentInjectedProps ) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nome_imovel" />
            <TextField source="description" />
            <TextField source="endereco" />
            <TextField source="bairro" />
            <TextField source="cidade" />
            <TextField source="valor" />
            <TextField source="materialApoio" />
        </Datagrid>
    </List>
)

export const ImovelCreate = (props: ResourceComponentInjectedProps ) => (
    <Create {...props} className="Createu">
        <SimpleForm className="formCreate">
            <TextInput source="name" className="Create"/>
            <TextInput source="Imovelname" className="Create"/>
            <TextInput source="email" className="Create"/>
            <TextInput source="phone" className="Create"/>
        </SimpleForm>
    </Create>
)

export const ImovelEdit = (props: ResourceComponentInjectedProps ) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <TextInput source="Imovelname" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
)