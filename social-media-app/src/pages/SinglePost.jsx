import React from "react"
import { useParams } from "react-router-dom"
import useSWR from "swr"
import { fetcher } from "../helpers/axios"
import Layout from "../components/Layout"
import { Col, Row } from "react-bootstrap"
import Post from "../components/posts/Post"

function SinglePost() {
	let { postId } = useParams()
	const post = useSWR(`/post/${postId}/`, fetcher)
	const comments = useSWR(`/post/${postId}/comment/`, fetcher)

	return (
		<Layout hasNavigationBack>
			{post.data ? (
				<Row className="justify-content-center">
					<Col sm={8}>
						<Post post={post.data} refresh={post.mutate} isSinglePost />
					</Col>
				</Row>
			) : (
				<div>Loading...</div>
			)}
		</Layout>
	)
}

export default SinglePost
