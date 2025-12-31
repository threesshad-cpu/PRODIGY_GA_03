const DATASETS = {
  "Machine Learning": [
    'machine learning is a subset of artificial intelligence.',
'supervised learning uses labeled training data.',
'unsupervised learning discovers hidden patterns.',
'reinforcement learning uses rewards and penalties.',
'classification predicts discrete class labels.',
'regression predicts continuous values.',
'training data is used to fit the model.',
'test data evaluates model performance.',
'validation data tunes hyperparameters.',
'overfitting occurs when a model memorizes data.',
'underfitting occurs when a model is too simple.',
'bias represents systematic error.',
'variance represents sensitivity to data.',
'gradient descent minimizes loss functions.',
'stochastic gradient descent updates weights iteratively.',
'loss functions measure prediction error.',
'mean squared error is used in regression.',
'cross entropy loss is used in classification.',
'activation functions introduce nonlinearity.',
'relu improves training speed.',
'sigmoid outputs probabilities.',
'softmax normalizes class scores.',
'neural networks consist of layers.',
'input layers receive features.',
'hidden layers perform transformations.',
'output layers produce predictions.',
'backpropagation updates weights using gradients.',
'learning rate controls step size.',
'epochs represent full training cycles.',
'batch size affects convergence.',
'feature scaling improves optimization.',
'normalization rescales features.',
'standardization centers data.',
'principal component analysis reduces dimensionality.',
'k means clustering groups data points.',
'support vector machines maximize margins.',
'decision trees split features recursively.',
'random forests combine multiple trees.',
'ensemble learning improves accuracy.',
'bagging reduces variance.',
'boosting reduces bias.',
'adaboost focuses on misclassified samples.',
'gradient boosting builds models sequentially.',
'xgboost optimizes performance.',
'deep learning uses deep architectures.',
'convolutional neural networks process images.',
'filters extract spatial features.',
'pooling reduces dimensionality.',
'recurrent neural networks handle sequences.',
'lstm solves vanishing gradients.',
'gru simplifies recurrent units.',
'natural language processing handles text.',
'tokenization splits text into tokens.',
'stemming reduces words to roots.',
'lemmatization preserves meaning.',
'word embeddings capture semantics.',
'tf idf weighs word importance.',
'transformers use attention mechanisms.',
'self attention models dependencies.',
'bert uses bidirectional context.',
'gpt generates text autoregressively.',
'evaluation metrics assess performance.',
'accuracy measures correct predictions.',
'precision measures positive correctness.',
'recall measures coverage.',
'f1 score balances precision and recall.',
'confusion matrices summarize results.',
'roc curves visualize tradeoffs.',
'auc measures separability.',
'hyperparameter tuning improves models.',
'grid search explores combinations.',
'random search samples configurations.',
'cross validation improves robustness.',
'early stopping prevents overfitting.',
'dropout regularizes networks.',
'regularization penalizes complexity.',
'l1 regularization enforces sparsity.',
'l2 regularization smooths weights.',
'model deployment enables inference.',
'inference predicts unseen data.',
'ml pipelines automate workflows.',
'feature engineering improves performance.',
'data leakage causes optimistic bias.',
'model interpretability explains predictions.',
'shap values estimate contributions.',
'lime explains local predictions.',
'ethical ai ensures fairness.',
'bias mitigation improves trust.',
'model monitoring detects drift.',
'concept drift changes data distribution.',
'continuous learning updates models.'

  ],

  "Operating Systems": [
    'operating systems manage hardware resources.',
'processes represent running programs.',
'threads enable concurrent execution.',
'multitasking executes multiple processes.',
'context switching saves process state.',
'cpu scheduling allocates processor time.',
'fcfs schedules by arrival time.',
'sjf minimizes waiting time.',
'round robin uses time quantum.',
'priority scheduling assigns importance.',
'deadlock occurs when processes wait indefinitely.',
'mutual exclusion prevents simultaneous access.',
'hold and wait causes deadlock.',
'no preemption blocks resource release.',
'circular wait forms dependency cycles.',
'deadlock prevention avoids conditions.',
'deadlock avoidance uses banker algorithm.',
'deadlock detection identifies cycles.',
'memory management allocates ram.',
'paging divides memory into frames.',
'segmentation divides memory logically.',
'virtual memory extends address space.',
'page replacement selects victim pages.',
'fifo replaces oldest pages.',
'lru replaces least used pages.',
'optimal replacement minimizes faults.',
'thrashing degrades performance.',
'file systems organize data storage.',
'directories structure files hierarchically.',
'inodes store metadata.',
'journaling improves reliability.',
'disk scheduling optimizes seek time.',
'fcfs disk scheduling is simple.',
'scan moves head in one direction.',
'c scan provides uniform wait.',
'interrupts signal events.',
'system calls provide kernel access.',
'user mode restricts privileges.',
'kernel mode allows full access.',
'monolithic kernels integrate services.',
'microkernels minimize kernel size.',
'hybrid kernels combine designs.',
'synchronization avoids race conditions.',
'mutex ensures mutual exclusion.',
'semaphores control access.',
'spinlocks busy wait.',
'critical sections protect data.',
'ipc enables communication.',
'pipes transfer data streams.',
'shared memory is fast.',
'message queues buffer messages.',
'real time systems meet deadlines.',
'hard real time enforces strict timing.',
'soft real time allows flexibility.',
'booting initializes system.',
'bios loads bootloader.',
'uefi modernizes boot process.',
'virtualization abstracts hardware.',
'hypervisors manage virtual machines.',
'type one hypervisors run on hardware.',
'type two run on host os.',
'containers isolate applications.',
'docker packages environments.',
'kubernetes orchestrates containers.',
'resource allocation ensures fairness.',
'power management reduces consumption.',
'security enforces access control.',
'authentication verifies identity.',
'authorization grants permissions.',
'encryption protects data.',
'access control lists define rights.',
'kernel panics indicate fatal errors.',
'logging records events.',
'monitoring tracks performance.'

  ],

  "Databases": [
    'databases store structured information.',
'relational databases use tables.',
'tables contain rows and columns.',
'primary keys uniquely identify records.',
'foreign keys enforce relationships.',
'sql queries manipulate data.',
'select retrieves records.',
'insert adds records.',
'update modifies data.',
'delete removes data.',
'where filters results.',
'join combines tables.',
'inner join matches rows.',
'left join preserves left rows.',
'right join preserves right rows.',
'full join combines all.',
'indexes improve query speed.',
'btree indexes balance nodes.',
'hash indexes optimize equality.',
'normalization reduces redundancy.',
'first normal form removes repetition.',
'second normal form removes partial dependency.',
'third normal form removes transitive dependency.',
'denormalization improves read speed.',
'transactions ensure consistency.',
'acid properties guarantee reliability.',
'atomicity ensures all or nothing.',
'consistency preserves constraints.',
'isolation separates transactions.',
'durability persists changes.',
'commit finalizes transactions.',
'rollback undoes changes.',
'concurrency control manages conflicts.',
'locking prevents conflicts.',
'deadlocks occur due to locks.',
'timestamp ordering resolves conflicts.',
'multiversion concurrency control improves reads.',
'views provide virtual tables.',
'stored procedures encapsulate logic.',
'triggers execute on events.',
'constraints enforce rules.',
'unique constraints prevent duplicates.',
'check constraints validate data.',
'nosql databases handle unstructured data.',
'key value stores map pairs.',
'document databases store json.',
'column databases optimize analytics.',
'graph databases store relationships.',
'sharding distributes data.',
'replication improves availability.',
'master slave replication copies data.',
'read replicas offload queries.',
'backup ensures recovery.',
'point in time recovery restores states.',
'indexes consume storage.',
'query optimization improves performance.',
'execution plans guide queries.',
'cost based optimizers choose strategies.',
'statistics guide optimization.',
'data warehousing supports analytics.',
'oltp handles transactions.',
'olap handles analysis.',
'star schemas simplify queries.',
'fact tables store metrics.',
'dimension tables store context.',
'data consistency is critical.',
'eventual consistency trades accuracy.',
'distributed databases scale horizontally.',
'cap theorem defines tradeoffs.',
'security protects data.',
'authentication controls access.',
'authorization limits actions.',
'encryption secures storage.',

  ],

  "Computer Networks": [
    'computer networks connect devices.',
'nodes exchange data.',
'protocols define communication rules.',
'osi model has seven layers.',
'physical layer transmits bits.',
'data link layer frames data.',
'network layer routes packets.',
'transport layer ensures delivery.',
'session layer manages sessions.',
'presentation layer formats data.',
'application layer serves users.',
'tcp provides reliable transmission.',
'udp provides fast transmission.',
'ip routes packets.',
'ipv4 uses 32 bit addresses.',
'ipv6 uses 128 bit addresses.',
'subnetting divides networks.',
'routing tables guide packets.',
'static routing is manual.',
'dynamic routing adapts paths.',
'rip uses hop count.',
'ospf uses link state.',
'bgp routes between networks.',
'congestion control avoids overload.',
'flow control matches rates.',
'three way handshake establishes tcp.',
'syn initiates connection.',
'ack acknowledges receipt.',
'fin closes connection.',
'error detection uses checksums.',
'retransmission handles loss.',
'latency measures delay.',
'bandwidth measures capacity.',
'throughput measures delivery.',
'packet loss degrades performance.',
'firewalls filter traffic.',
'stateful firewalls track connections.',
'https secures http.',
'tls encrypts traffic.',
'ftp transfers files.',
'smtp sends email.',
'pop retrieves email.',
'imap synchronizes email.',
'socket programming enables communication.',
'ports identify services.',
'well known ports are reserved.',
'load balancing distributes traffic.',
'round robin balances requests.',
'proxy servers mediate access.',
'content delivery networks cache data.',
'wireless networks use radio waves.',
'wifi uses ieee standards.',
'bluetooth supports short range.',
'cellular networks support mobility.',
'5g improves latency.',
'network security protects data.',
'encryption ensures confidentiality.',
'authentication verifies identity.',
'integrity prevents tampering.',
'vpn creates secure tunnels.',
'intrusion detection monitors attacks.',
'intrusion prevention blocks threats.',
'quality of service prioritizes traffic.',
'real time traffic needs low latency.',
'streaming requires buffering.',
'multicast sends to groups.',
'broadcast sends to all.',
'unicast sends to one.',
'network monitoring analyzes traffic.',
'snmp manages devices.'

  ]
};

const topicSelect = document.getElementById("topic");
const promptsDiv = document.getElementById("prompts");

let selected = new Set();

/* -----------------------------
   RENDER PROMPTS
----------------------------- */
function renderPrompts() {
  selected.clear();
  promptsDiv.innerHTML = "";

  PROMPTS[topicSelect.value].forEach(text => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = text;

    div.onclick = () => {
      div.classList.toggle("selected");
      selected.has(text) ? selected.delete(text) : selected.add(text);
    };

    promptsDiv.appendChild(div);
  });
}

topicSelect.onchange = renderPrompts;
renderPrompts();

/* -----------------------------
   MARKOV CHAIN LOGIC
----------------------------- */
function buildMarkovChain(sentences, order = 2) {
  const chain = {};

  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);

    for (let i = 0; i <= words.length - order; i++) {
      const key = words.slice(i, i + order).join(" ");
      const next = words[i + order];

      if (!next) continue;

      if (!chain[key]) chain[key] = [];
      chain[key].push(next);
    }
  });

  return chain;
}


function generateSentence(chain, order = 2, maxWords = 20) {
  const keys = Object.keys(chain);
  let current = keys[Math.floor(Math.random() * keys.length)];
  let result = current.split(" ");

  for (let i = 0; i < maxWords; i++) {
    const options = chain[current];
    if (!options) break;

    const next = options[Math.floor(Math.random() * options.length)];
    result.push(next);

    current = result.slice(result.length - order).join(" ");
  }

  return result.join(" ") + ".";
}


/* -----------------------------
   GENERATE BUTTON
----------------------------- */
function generate() {
  const topic = document.getElementById("topic").value;
  const output = document.getElementById("output");

  const sentences = DATASETS[topic];
  if (!sentences || sentences.length < 10) {
    output.innerText = "Not enough data to generate text.";
    return;
  }

  const order = 2; // Markov order (n-gram size)
  const lines = 10;

  const chain = buildMarkovChain(sentences, order);
  let result = [];

  for (let i = 0; i < lines; i++) {
    result.push(`${i + 1}. ${generateSentence(chain, order)}`);
  }

  output.innerText = result.join("\n");
}
