FROM node:latest

# Install any required linux items
RUN apt-get update              && \
    apt-get -y install vim

# Install basic python tools
RUN npm install --save reactstrap@next react react-dom

CMD bash
