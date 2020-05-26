import asyncio
import base64
import binascii
import logging
import sys
from typing import Dict, Any, Tuple, Sequence

import uvicorn
import yaml
from starlette.applications import Starlette
from starlette.responses import JSONResponse, FileResponse
from starlette.middleware.cors import CORSMiddleware
from starlette.websockets import WebSocket

app = Starlette()


@app.route('/turtle/{path}', methods=["get"])
async def turtle(request):
    """查重接口"""
    file_path = request.path_params["path"]
    print(file_path)
    return FileResponse("../dist/" + file_path)


@app.route('/turtle', methods=["get"])
async def ti(request):
    return FileResponse("../example/ind.html")


if __name__ == '__main__':
    uvicorn.run(app, port=23333, host="0.0.0.0")
