from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    data: Dict

class Edge(BaseModel):
    id: str
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    graph = defaultdict(list)
    in_degree = {node.id: 0 for node in nodes}
    
    for edge in edges:
        graph[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    queue = [node.id for node in nodes if in_degree[node.id] == 0]
    visited = 0
    
    while queue:
        u = queue.pop(0)
        visited += 1
        
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    return visited == len(nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    try:
        num_nodes = len(pipeline.nodes)
        num_edges = len(pipeline.edges)
        dag = is_dag(pipeline.nodes, pipeline.edges)
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': dag
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
