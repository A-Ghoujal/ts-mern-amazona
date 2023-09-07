
import { Col, Row }  from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'


   

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    isLoading? (
        <LoadingBox />
        ) : error? (
          <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
        ) : (
    <Row>
      <Helmet>
        <title>Tamazona</title>
      </Helmet>
    {products!.map((product) => (
        <Col key={product.slug} sm={6} lg={3}  md={4}>
        <ProductItem product={product} />
        </Col>
    ))}
    </Row>
  ))
}
