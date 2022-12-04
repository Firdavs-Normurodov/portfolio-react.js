import React from 'react'
import "./header.css"
const header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-md-auto gap-2">
              <li class="nav-item rounded">
                <a class="nav-link" href="#"><i class="bi bi-people-fill me-2"></i>Home</a>
              </li>
              <li class="nav-item rounded">
                <a class="nav-link" href="#"><i class="bi bi-people-fill me-2"></i>About</a>
              </li>
              <li class="nav-item rounded">
                <a class="nav-link" href="#"><i class="bi bi-people-fill me-2"></i>Service</a>
              </li>
              <li class="nav-item rounded">
                <a class="nav-link" href="#"><i class="bi bi-people-fill me-2"></i>Project</a>
              </li>
              <li class="nav-item rounded">
                <a class="nav-link" href="#"><i class="bi bi-telephone-fill me-2"></i>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default header
