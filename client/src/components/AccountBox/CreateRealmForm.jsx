import {
  BoxContainer,
  ClearButton,
  FormContainer,
  Input,
  TextArea,
  SubmitButton,
} from './common';
import Marginer from '../Marginer/Marginer';
import FileBase from 'react-file-base64';
import { useState } from 'react';

export const CreateRealmForm = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const handleSubmit = () => {};

  return (
    <BoxContainer>
      <FormContainer autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Input name='creator' label='Creator' type='text' placeholder='Creator' />
        <Input name='title' label='Title' type='text' placeholder='Title' />
        {/* <Input name='message' label='Message' type='text' placeholder='Message' /> */}
        <Input name='tags' label='Tags' type='text' placeholder='Tags' />
        <TextArea name='Message' label='Message' placeholder='Enter a message...' />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <div style={{ margin: '5px 0 25px 0' }}>
        <FileBase
          type='file'
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        />
      </div>
      <SubmitButton type='submit'>Create</SubmitButton>
      <ClearButton clear>Clear</ClearButton>
      <Marginer direction='vertical' margin='1em' />
    </BoxContainer>
  );
};
